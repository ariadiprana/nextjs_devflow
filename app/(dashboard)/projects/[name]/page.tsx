export default async function ProjectDetails({ params }: { params: object }) {
  const { name } = await params;
  return (
    <main>
      <h1>Project {name}</h1>
    </main>
  );
}
