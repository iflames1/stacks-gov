import Dao from "@/components/dao/dao";

export default function page({ params }: { params: { username: string } }) {
  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <Dao username={params.username} />
    </div>
  );
}
