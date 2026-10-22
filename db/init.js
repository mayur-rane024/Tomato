db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE || "tomato");

if (!db.getCollectionNames().includes("assignment_info")) {
  db.assignment_info.insertOne({
    application: "Tomato Food Delivery",
    purpose: "Assignment 5 multi-container database",
    createdAt: new Date()
  });
}