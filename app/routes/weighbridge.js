module.exports = function (router) {
  
// Save and continue from waste-description → waste-weight
router.post("/weighbridge-recording/waste-weight", function (req, res) {
  res.redirect("/layouts/Private-beta/Weighbridge/V1/WR1/weighbridge-recording/waste-weight");
});

// waste-weight → carrier-details
router.post("/weighbridge-recording/carrier-details", function (req, res) {
  res.redirect("/layouts/Private-beta/Weighbridge/V1/WR1/weighbridge-recording/carrier-details");
});

// carrier-details → check-answers
router.post("/weighbridge-recording/check-answers", function (req, res) {
  res.redirect("/layouts/Private-beta/Weighbridge/V1/WR1/weighbridge-recording/check-answers");
});

// check-answers → confirmation
router.post("/weighbridge-recording/confirmation", function (req, res) {
  res.redirect("/layouts/Private-beta/Weighbridge/V1/WR1/weighbridge-recording/confirmation");
});



// EWC code look up fakery //
router.post("/weighbridge-recording/waste-description-old", function (req, res) {

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
router.post("/weighbridge-recording/waste-description-add", function (req, res) {

  const description = req.session.data["waste-description"] || "";

  console.log("Add route hit ✅");
  console.log("description:", description);

  const materialLookup = {
  // Soil / excavation
  soil:         { code: "170504", description: "Soil and stones other than those mentioned in 17 05 03" },
  earth:        { code: "170504", description: "Soil and stones other than those mentioned in 17 05 03" },
  clay:         { code: "170504", description: "Soil and stones other than those mentioned in 17 05 03" },
  stones:       { code: "170504", description: "Soil and stones other than those mentioned in 17 05 03" },
  gravel:       { code: "010408", description: "Waste gravel and crushed rocks" },
  sand:         { code: "010409", description: "Waste sand and clays" },

  // Wood / timber
  timber:       { code: "170201", description: "Wood" },
  wood:         { code: "170201", description: "Wood" },
  lumber:       { code: "170201", description: "Wood" },
  bark:         { code: "030101", description: "Waste bark and cork" },
  sawdust:      { code: "030105", description: "Sawdust, shavings and cuttings" },

  // Metals
  metal:        { code: "200140", description: "Metals" },
  metals:       { code: "200140", description: "Metals" },
  steel:        { code: "191001", description: "Iron and steel waste" },
  iron:         { code: "191001", description: "Iron and steel waste" },
  copper:       { code: "191002", description: "Non-ferrous waste" },
  aluminium:    { code: "191002", description: "Non-ferrous waste" },
  aluminum:     { code: "191002", description: "Non-ferrous waste" },

  // Plastics
  plastic:      { code: "200139", description: "Plastics" },
  plastics:     { code: "200139", description: "Plastics" },
  rubber:       { code: "191204", description: "Plastic and rubber" },

  // Organic / agricultural
  manure:       { code: "020106", description: "Animal faeces, urine and manure (including spoiled straw), effluent, collected separately and treated off-site" },
  slurry:       { code: "020106", description: "Animal faeces, urine and manure (including spoiled straw), effluent, collected separately and treated off-site" },
  straw:        { code: "020106", description: "Animal faeces, urine and manure (including spoiled straw), effluent, collected separately and treated off-site" },
  compost:      { code: "190503", description: "Off-specification compost" },
  vegetation:   { code: "020103", description: "Plant tissue waste" },
  plants:       { code: "020103", description: "Plant tissue waste" },
  grass:        { code: "200201", description: "Biodegradable waste" },
  leaves:       { code: "200201", description: "Biodegradable waste" },
  garden:       { code: "200201", description: "Biodegradable waste" },

  // Paper / cardboard
  paper:        { code: "191201", description: "Paper and cardboard" },
  cardboard:    { code: "191201", description: "Paper and cardboard" },

  // Glass
  glass:        { code: "191205", description: "Glass" },

  // Food / kitchen
  food:         { code: "200108", description: "Biodegradable kitchen and canteen waste" },
  kitchen:      { code: "200108", description: "Biodegradable kitchen and canteen waste" },
  fruit:        { code: "020302", description: "Wastes from preserving agents" },
  vegetables:   { code: "020302", description: "Wastes from preserving agents" },
  veg:          { code: "020302", description: "Wastes from preserving agents" },

  // Textiles
  textiles:     { code: "191208", description: "Textiles" },
  clothing:     { code: "200110", description: "Clothes" },
  clothes:      { code: "200110", description: "Clothes" },

  // Construction / demolition
  concrete:     { code: "170101", description: "Concrete" },
  bricks:       { code: "170102", description: "Bricks" },
  brick:        { code: "170102", description: "Bricks" },
  tiles:        { code: "170103", description: "Tiles and ceramics" },
  ceramics:     { code: "170103", description: "Tiles and ceramics" },
  plasterboard: { code: "170802", description: "Gypsum-based construction materials" },
  gypsum:       { code: "170802", description: "Gypsum-based construction materials" },
  asphalt:      { code: "170301", description: "Bituminous mixtures" },
  tarmac:       { code: "170301", description: "Bituminous mixtures" }
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
