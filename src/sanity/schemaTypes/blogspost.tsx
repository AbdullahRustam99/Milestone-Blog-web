export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Important for accessibility and SEO.",
        },
      ],
    },
    {
      name: "blogdate",
      type: "string",
      title: "Date Added",
    },
    {
      name: "mainHeading",
      type: "string",
      title: "Main Heading",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "comments",
      type: "array",
      title: "Comments",
      of: [
        {
          type: "object",
          fields: [
            { name: "username", type: "string", title: "Username" },
            { name: "comment", type: "text", title: "Comment" },
          ],
        },
      ],
    },
  ],
};

