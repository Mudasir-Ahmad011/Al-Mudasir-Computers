type Props = {
  /** A schema.org object, or an array of them. */
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Renders schema.org structured data. Search engines read this to build rich
 * results, and assistants read it to state plain facts about the business
 * without having to infer them from the page copy.
 *
 * The content is ours, not user input, so serialising it is safe; the angle
 * brackets are still escaped so a stray "</script>" in future copy cannot
 * close the tag early.
 */
export default function JsonLd({ data }: Props) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
