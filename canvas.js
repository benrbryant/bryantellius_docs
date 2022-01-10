db.companies.find({
  $or: [
    {
      $and: [
        { founded_year: 2004 },
        { $or: [{ category_code: "web" }, { category_code: "social" }] },
      ],
    },
    { $and: [
        { founded_month: 10 },
        { $or: [{ category_code: "web" }, { category_code: "social" }] },
    ] },
  ],
}).count();
