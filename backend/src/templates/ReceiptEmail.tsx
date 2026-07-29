import EmailLayout from "./components/EmailLayout";
import EmailButton from "./components/EmailButton";

interface Props {
  name: string;
  receiptNumber: string;
  course: string;
  amount: string;
  paymentDate: string;
  dashboardUrl: string;
}

export default function ReceiptEmail({
  name,
  receiptNumber,
  course,
  amount,
  paymentDate,
  dashboardUrl,
}: Props) {
  return (
    <EmailLayout title="Payment Successful 🎉">

      <p>
        Hi <strong>{name}</strong>,
      </p>

      <p>
        Thank you for your payment. Your enrollment has been confirmed and your
        seat has been reserved successfully.
      </p>

      <div
        style={{
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "14px",
          padding: "24px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <table
          width="100%"
          cellPadding={8}
          style={{
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <tr>
              <td><strong>Receipt No.</strong></td>
              <td>{receiptNumber}</td>
            </tr>

            <tr>
              <td><strong>Course</strong></td>
              <td>{course}</td>
            </tr>

            <tr>
              <td><strong>Amount Paid</strong></td>
              <td>{amount}</td>
            </tr>

            <tr>
              <td><strong>Date</strong></td>
              <td>{paymentDate}</td>
            </tr>

            <tr>
              <td><strong>Status</strong></td>
              <td
                style={{
                  color: "#16a34a",
                  fontWeight: 700,
                }}
              >
                PAID
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Keep this receipt for your records. You can also access your course and
        payment history from your student dashboard at any time.
      </p>

      <EmailButton
        title="Open Student Dashboard"
        href={dashboardUrl}
      />

    </EmailLayout>
  );
}