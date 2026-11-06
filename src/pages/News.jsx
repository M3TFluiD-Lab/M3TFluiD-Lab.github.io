import Page from "../components/Page";
import News from "../components/News"; // your existing cards/list

export default function NewsPage() {
  return (
    <Page>
      {/* Keep your cards in a centered grid */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        <News />
      </div>
    </Page>
  );
}
