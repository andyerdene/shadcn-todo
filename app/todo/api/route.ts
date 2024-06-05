export const GET = (req: Request, res: any) => {
  return Response.json({
    todos: [
      {
        id: "INV001",
        title: "Job to do 1",
        status: "PENDING",
        team: "My-1",
      },

      {
        id: "INV001",
        title: "Job to do 2",
        status: "DONE",
        team: "My-1",
      },

      {
        id: "INV001",
        title: "Job to do 3",
        status: "PENDING",
        team: "My-1",
      },

      {
        id: "INV001",
        title: "Job to do 4",
        status: "PENDING",
        team: "My-1",
      },

      {
        id: "INV001",
        title: "Job to do 5",
        status: "PENDING",
        team: "My-1",
      },
    ],
  });
};
