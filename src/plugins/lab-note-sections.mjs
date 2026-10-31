// Wraps the "Try it in your lab" and "The day-job version" sections of a Lab Note
// in <aside> boxes, so posts stay plain Markdown with ordinary ## headings.
const SECTIONS = [
  { match: /^try it in your lab$/i, className: 'try' },
  { match: /^the day-job version$/i, className: 'dayjob' },
];

const textOf = (node) =>
  node.type === 'text' ? node.value : (node.children || []).map(textOf).join('');

const ends = (node) =>
  node.type === 'element' && ['h2', 'hr', 'blockquote'].includes(node.tagName);

export default function labNoteSections() {
  return (tree) => {
    const out = [];
    const kids = tree.children;
    for (let i = 0; i < kids.length; i++) {
      const node = kids[i];
      const section =
        node.type === 'element' && node.tagName === 'h2' &&
        SECTIONS.find((s) => s.match.test(textOf(node).trim()));
      if (!section) {
        out.push(node);
        continue;
      }
      const body = [node];
      while (i + 1 < kids.length && !ends(kids[i + 1])) body.push(kids[++i]);
      out.push({
        type: 'element',
        tagName: 'aside',
        properties: { className: [section.className], ariaLabel: textOf(node).trim() },
        children: body,
      });
    }
    tree.children = out;
  };
}
