"use client";

import { useEffect, useState } from "react";

import { useAdminSettings } from "@/hooks/useAdminSettings";

export default function SettingsPage() {

  const {

    settings,

    loading,

    saving,

    save,

  } = useAdminSettings();

  const [

    form,

    setForm,

  ] = useState<any>({});

  useEffect(() => {

    if (settings) {

      setForm(settings);

    }

  }, [settings]);

  if (loading) {

    return (
      <div className="p-8">
        Loading Settings...
      </div>
    );

  }

  const change = (

    key: string,

    value: any

  ) => {

    setForm((prev: any) => ({

      ...prev,

      [key]: value,

    }));

  };

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">

          Settings

        </h1>

        <p className="text-slate-500">

          Manage your LMS configuration.

        </p>

      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-xl font-bold">

          General

        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <Input
            label="Platform Name"
            value={form.platformName}
            onChange={(v) =>
              change("platformName", v)
            }
          />

          <Input
            label="Support Email"
            value={form.supportEmail}
            onChange={(v) =>
              change("supportEmail", v)
            }
          />

          <Input
            label="Support Phone"
            value={form.supportPhone}
            onChange={(v) =>
              change("supportPhone", v)
            }
          />

          <Input
            label="Currency"
            value={form.currency}
            onChange={(v) =>
              change("currency", v)
            }
          />

        </div>

      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-xl font-bold">

          Payment

        </h2>

        <div className="grid gap-6">

          <Input
            label="Paystack Public Key"
            value={form.paystackPublicKey}
            onChange={(v) =>
              change(
                "paystackPublicKey",
                v
              )
            }
          />

          <Input
            label="Paystack Secret Key"
            value={form.paystackSecretKey}
            onChange={(v) =>
              change(
                "paystackSecretKey",
                v
              )
            }
          />

        </div>

      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-xl font-bold">

          Email

        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <Input
            label="SMTP Host"
            value={form.smtpHost}
            onChange={(v) =>
              change("smtpHost", v)
            }
          />

          <Input
            label="SMTP Port"
            value={form.smtpPort}
            onChange={(v) =>
              change("smtpPort", Number(v))
            }
          />

          <Input
            label="SMTP Username"
            value={form.smtpUser}
            onChange={(v) =>
              change("smtpUser", v)
            }
          />

          <Input
            label="SMTP Password"
            value={form.smtpPassword}
            onChange={(v) =>
              change("smtpPassword", v)
            }
          />

        </div>

      </div>

      <div className="flex justify-end">

        <button

          onClick={() => save(form)}

          disabled={saving}

          className="rounded-xl bg-green-600 px-8 py-3 text-white"

        >

          {saving

            ? "Saving..."

            : "Save Changes"}

        </button>

      </div>

    </div>

  );

}

function Input({

  label,

  value,

  onChange,

}: {

  label: string;

  value: any;

  onChange: (

    value: string

  ) => void;

}) {

  return (

    <div>

      <label className="mb-2 block font-medium">

        {label}

      </label>

      <input

        value={value ?? ""}

        onChange={(e) =>
          onChange(e.target.value)
        }

        className="w-full rounded-xl border p-3"

      />

    </div>

  );

}