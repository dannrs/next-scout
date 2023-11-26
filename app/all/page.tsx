import { list } from "@vercel/blob";

export default async function AllFilesPage() {
  const { blobs } = await list();
  const file = blobs.map((blob) => blob.url)
  console.log({blobs});
  return <div></div>
}
