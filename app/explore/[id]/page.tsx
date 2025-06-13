interface DetailExploreProps {
  params: {
    id: string; 
  };
}

export default function Page({ params }: DetailExploreProps) {
  const { id } = params;
  return (
    <section className="p-4">
     <p>id: {id}</p>
    </section>
  );
}
