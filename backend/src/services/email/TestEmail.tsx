interface Props {
  name: string;
}

export default function TestEmail({ name }: Props) {
  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <h1>Welcome {name} 👋</h1>

      <p>
        Congratulations! Your TechHarvest email system is working successfully.
      </p>
    </div>
  );
}