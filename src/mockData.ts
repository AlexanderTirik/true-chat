let mockMessages = [
  {
    id: "80f08600-1b8f-11e8-9629-c7eca82aa7bd",
    text: "I don't *** understand. It's the Panama accounts",
    user: "Ruth",
    avatar:
      "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    userId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    editedAt: "",
    createdAt: "2020-07-16T19:48:12.936Z",
  },
  {
    id: "80e00b40-1b8f-11e8-9629-c7eca82aa7bd",
    text: "Tells exactly what happened.",
    user: "Wendy",
    avatar:
      "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
    userId: "533b5230-1b8f-11e8-9629-c7eca82aa7bd",
    editedAt: "2020-07-16T19:48:47.481Z",
    createdAt: "2020-07-16T19:48:42.481Z",
  },
  {
    id: "80e03259-1b8f-11e8-9629-c7eca82aa7bd",
    text: "You were doing your daily bank transfers and…",
    user: "Wendy",
    avatar:
      "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
    userId: "533b5230-1b8f-11e8-9629-c7eca82aa7bd",
    editedAt: "",
    createdAt: "2020-07-16T19:48:56.273Z",
  },
  {
    id: "80e03258-1b8f-11e8-9629-c7eca82aa7bd",
    text: "Yes, like I've been doing every *** day without red *** flag",
    user: "Ruth",
    avatar:
      "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    userId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    editedAt: "",
    createdAt: "2020-07-16T19:49:14.480Z",
  },
  {
    id: "80e03257-1b8f-11e8-9629-c7eca82aa7bd",
    text: "There`s never been a *** problem.",
    user: "Ruth",
    avatar:
      "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    userId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    editedAt: "",
    createdAt: "2020-07-16T19:48:28.769Z",
  },
  {
    id: "80e03256-1b8f-11e8-9629-c7eca82aa7bd",
    text: "Why this account?",
    user: "Helen",
    avatar:
      "https://resizing.flixster.com/PCEX63VBu7wVvdt9Eq-FrTI6d_4=/300x300/v1.cjs0MzYxNjtqOzE4NDk1OzEyMDA7MzQ5OzMxMQ",
    userId: "4b003c20-1b8f-11e8-9629-c7eca82aa7bd",
    editedAt: "",
    createdAt: "2020-07-16T19:49:33.195Z",
  },
  {
    id: "80e03255-1b8f-11e8-9629-c7eca82aa7bd",
    text: "I don`t *** know! I don`t know!",
    user: "Ruth",
    avatar:
      "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    userId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    editedAt: "",
    createdAt: "2020-07-16T19:49:45.821Z",
  },
  {
    id: "80e03254-1b8f-11e8-9629-c7eca82aa7bd",
    text: "What the ** is a red flag anyway?",
    user: "Ben",
    avatar: "https://www.aceshowbiz.com/images/photo/tom_pelphrey.jpg",
    userId: "5328dba1-1b8f-11e8-9629-c7eca82aa7bd",
    editedAt: "",
    createdAt: "2020-07-16T19:50:07.708Z",
  },
  {
    id: "80e03253-1b8f-11e8-9629-c7eca82aa7bd",
    text: "You said you could handle things",
    user: "Helen",
    avatar:
      "https://resizing.flixster.com/PCEX63VBu7wVvdt9Eq-FrTI6d_4=/300x300/v1.cjs0MzYxNjtqOzE4NDk1OzEyMDA7MzQ5OzMxMQ",
    userId: "4b003c20-1b8f-11e8-9629-c7eca82aa7bd",
    editedAt: "",
    createdAt: "2020-07-16T19:53:02.483Z",
  },
  {
    id: "80e03252-1b8f-11e8-9629-c7eca82aa7bd",
    text: "I did what he taught me.",
    user: "Ruth",
    avatar:
      "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    userId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    editedAt: "2020-07-16T19:53:50.272Z",
    createdAt: "2020-07-16T19:53:17.272Z",
  },
  {
    id: "80e03251-1b8f-11e8-9629-c7eca82aa7bd",
    text: "it`s not my fucking fault!",
    user: "Ruth",
    avatar:
      "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    userId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    editedAt: "",
    createdAt: "2020-07-16T19:53:49.171Z",
  },
  {
    id: "80e03250-1b8f-11e8-9629-c7eca82aa7bd",
    text: "Can you fix this? Can you fix it?",
    user: "Wendy",
    avatar:
      "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
    userId: "533b5230-1b8f-11e8-9629-c7eca82aa7bd",
    editedAt: "",
    createdAt: "2020-07-16T19:56:51.491Z",
  },
  {
    id: "80e03249-1b8f-11e8-9629-c7eca82aa7bd",
    text: "Her best is gonna get us all killed.",
    user: "Helen",
    avatar:
      "https://resizing.flixster.com/PCEX63VBu7wVvdt9Eq-FrTI6d_4=/300x300/v1.cjs0MzYxNjtqOzE4NDk1OzEyMDA7MzQ5OzMxMQ",
    userId: "4b003c20-1b8f-11e8-9629-c7eca82aa7bd",
    editedAt: "2020-07-16T19:57:15.965Z",
    createdAt: "2020-07-16T19:57:07.965Z",
  },
  {
    id: "80e03248-1b8f-11e8-9629-c7eca82aa7bd",
    text: "I don`t know how!",
    user: "Ruth",
    avatar:
      "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    userId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    editedAt: "",
    createdAt: "2020-07-16T19:58:06.686Z",
  },
  {
    id: "80e03247-1b8f-11e8-9629-c7eca82aa7bd",
    text:
      "it means that the accounts frozen that cause the feds might think that there's a crime being committed.",
    user: "Ruth",
    avatar:
      "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    userId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    editedAt: "",
    createdAt: "2020-07-16T19:52:04.375Z",
  },
  {
    id: "80e03246-1b8f-11e8-9629-c7eca82aa7bd",
    text: "Like by me",
    user: "Ruth",
    avatar:
      "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    userId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    editedAt: "",
    createdAt: "2020-07-16T19:52:15.334Z",
  },
  {
    id: "80e03245-1b8f-11e8-9629-c7eca82aa7bd",
    text: "aaaha!",
    user: "Ben",
    avatar: "https://www.aceshowbiz.com/images/photo/tom_pelphrey.jpg",
    userId: "5328dba1-1b8f-11e8-9629-c7eca82aa7bd",
    editedAt: "",
    createdAt: "2020-07-16T19:58:17.878Z",
  },
];
export default mockMessages;
