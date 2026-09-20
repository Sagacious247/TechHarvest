"use client";

import { useCallback, useEffect, useState } from "react";
import {
  createKnowledge,
  updateKnowledge,
  deleteKnowledge,
  getKnowledgeDocuments,
} from "@/services/knowledge.service";

import { KnowledgeDocument } from "@/types/knowledge";

export function useKnowledge() {

  const [documents, setDocuments] =
    useState<KnowledgeDocument[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const refresh = useCallback(async () => {

    try {

      setLoading(true);

      const response =
        await getKnowledgeDocuments();

      setDocuments(response.data ?? []);

    } catch (err: any) {

      setError(err.message);

    } finally {

      setLoading(false);

    }

  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  async function create(data: any) {

    await createKnowledge(data);

    await refresh();

  }

  async function update(
    id: string,
    data: any
  ) {

    await updateKnowledge(id, data);

    await refresh();

  }

  async function remove(id: string) {

    await deleteKnowledge(id);

    await refresh();

  }

  const stats = {
  knowledge: documents.length,
  chunks: documents.reduce((total, doc) => {
    return total + (doc.metadata?.chunks ?? 0);
  }, 0),
  conversations: 0,
  agents: 1,
};

 return {
  documents,
  loading,
  error,
  refresh,
  create,
  update,
  remove,
  stats,
};

}