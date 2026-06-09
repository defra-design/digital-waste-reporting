module.exports = function (router) {

// EWC code look up fakery //
router.post("/weighbridge-recording/waste-description", function (req, res) {

  const description = req.session.data["waste-description"] || "";

  console.log("Route hit ✅");
  console.log("description:", description);

  const materialLookup = {
    soil: { code: "17 05 04", description: "Soil and stones" },
    timber: { code: "17 02 01", description: "Wood" },
    wood: { code: "17 02 01", description: "Wood" },
    manure: { code: "02 01 06", description: "Animal faeces and manure" },
    metal: { code: "20 01 40", description: "Metals" },
    plastics: { code: "20 01 39", description: "Plastics" }
  };

  const cleaned = description.toLowerCase()
    .replace(/and/g, " ")
    .replace(/mixed/g, " ")
    .replace(/lots of/g, " ");

  const parts = cleaned
    .split(/[\s,]+/)
    .filter(word => word.length > 2);

  let matches = [];

  parts.forEach(word => {
    if (materialLookup[word]) {
      matches.push({
        material: word,
        code: materialLookup[word].code,
        description: materialLookup[word].description
      });
    }
  });

  const uniqueMatches = matches.filter(
    (item, index, self) =>
      index === self.findIndex(m => m.code === item.code)
  );

  req.session.data["ewc-matches"] = uniqueMatches;
  req.session.data["suggested-ewc"] = uniqueMatches.length ? uniqueMatches[0].code : "";
  req.session.data["detected-materials"] = uniqueMatches.map(m => m.material);

  res.redirect("/layouts/Private-beta/Weighbridge/V1/WR1/weighbridge-recording/waste-description-review");
});


// Add items to list
router.post("/weighbridge-recording/waste-description/add", function (req, res) {

  const description = req.session.data["waste-description"] || "";

  console.log("Add route hit ✅");
  console.log("description:", description);

  const materialLookup = {
    soil: { code: "170504", description: "Soil and stones other than those mentioned in 17 05 03" },
    timber: { code: "170201", description: "Wood" },
    wood: { code: "170201", description: "Wood" },
    manure: { code: "020106", description: "Animal faeces, urine and manure (including spoiled straw), effluent, collected separately and treated off-site" },
    metal: { code: "200140", description: "Metals" },
    plastics: { code: "200139", description: "Plastics" },
    fruit: { code: "020302", description: "Wastes from preserving agents" },
    vegetables: { code: "020302", description: "Wastes from preserving agents" }
  };

  // clean input
  const cleaned = description.toLowerCase()
    .replace(/and/g, " ")
    .replace(/mixed/g, " ")
    .replace(/lots of/g, " ");

  const parts = cleaned
    .split(/[\s,]+/)
    .filter(word => word.length > 2);

  // extract matches for THIS submission only
  let matches = [];

  parts.forEach(word => {
    if (materialLookup[word]) {
      matches.push({
        material: word,
        code: materialLookup[word].code,
        description: materialLookup[word].description
      });
    }
  });

  const uniqueMatches = matches.filter(
    (item, index, self) =>
      index === self.findIndex(m => m.code === item.code)
  );

  // ✅ NOW: append instead of overwrite
  if (!req.session.data["ewc-matches"]) {
    req.session.data["ewc-matches"] = [];
  }

  const existing = req.session.data["ewc-matches"];

  uniqueMatches.forEach(newItem => {

    const exists = existing.some(
      item => item.code === newItem.code
    );

    if (!exists) {
      existing.push(newItem);
    }

  });

  // ✅ clear input
  req.session.data["waste-description"] = "";

  res.redirect("/layouts/Private-beta/Weighbridge/V1/WR1/weighbridge-recording/waste-description");
});

router.post("/weighbridge-recording/waste-description/continue", function (req, res) {
  res.redirect("/layouts/Private-beta/Weighbridge/V1/WR1/weighbridge-recording/waste-description-review");
});


//Remove item from list
router.get("/weighbridge-recording/remove-item", function (req, res) {

  const codeToRemove = req.query.code;

  const current = req.session.data["ewc-matches"] || [];

  req.session.data["ewc-matches"] = current.filter(
    item => item.code !== codeToRemove
  );

  res.redirect("/layouts/Private-beta/Weighbridge/V1/WR1/weighbridge-recording/waste-description");
});



};
