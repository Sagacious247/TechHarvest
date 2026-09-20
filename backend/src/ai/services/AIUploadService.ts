import { PDFExtractionService } from "./PDFExtractionService";
import { ChunkingService } from "./ChunkingService";
import { KnowledgeService } from "./KnowledgeService";
import { EmbeddingService } from "./EmbeddingService";
import { KnowledgeChunk } from "../models/KnowledgeChunk";

import {
    KnowledgeDocumentRepository,
    KnowledgeChunkRepository,
} from "../repositories";

export class AIUploadService {

    private pdf = new PDFExtractionService();

    private chunker = new ChunkingService();

    private knowledge = new KnowledgeService(
        new KnowledgeDocumentRepository()
    );

    private embedding = new EmbeddingService();

    private chunkRepository =
        new KnowledgeChunkRepository();

    async processPDF(
        file: Express.Multer.File
    ) {

        console.log("========== PDF UPLOAD ==========");

        //
        // STEP 1
        // Extract PDF
        //
        const extracted =
            await this.pdf.extract(file);

        console.log(
            "PDF extracted."
        );

        //
        // STEP 2
        // Create Knowledge Document
        //
        const document =
            await this.knowledge.add({
                tenantId: "techharvest",
                title: file.originalname,
                category: "pdf",
                source: "upload",
                tags: [],
                metadata: {
                    pages: extracted.pages,
                    info: extracted.info,
                },
            });

        console.log(
            "Knowledge document created."
        );

        //
        // STEP 3
        // Chunk Text
        //
        const chunks =
            this.chunker.chunk(
                extracted.text
            );

        console.log(
            `${chunks.length} chunks created.`
        );

        //
        // STEP 4
        // Generate Embeddings
        //
        const payload: KnowledgeChunk[] = [];

        for (const chunk of chunks) {

            const embedding =
                await this.embedding.createEmbedding(
                    chunk.content
                );

            payload.push({

                tenantId: "techharvest",

                documentId: document.id,

                chunkIndex: chunk.index,

                content: chunk.content,

                embedding,

                metadata: {
                 source: file.originalname,
                 chapter: "Unknown",
                 section: "",
                 tags: [],
               },

            });

        }

        console.log(
            "Embeddings generated."
        );

        //
        // STEP 5
        // Save Chunks
        //
        await this.chunkRepository.createMany(
            payload
        );

        console.log(
            "Knowledge chunks saved."
        );

        return {

            success: true,

            document,

            chunks: payload.length,

        };

    }

}