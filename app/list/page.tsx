import Link from "next/link";

export default function ListPage() {
  return (
    <div>
      <ul>
        <ul>
          <li>
            <Link href={`/list/1`} prefetch={false}>
              Does Not Works with prefetch=false
            </Link>
          </li>
          <li>
            <Link href={`/list/2`}>Works when prefetch=true (default)</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}
