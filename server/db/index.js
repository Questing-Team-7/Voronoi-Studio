//this is the access point for all things database related!

const db = require("./db");
const ArtPieces = require("./models/ArtPieces");
const Voronoi = require("./models/Voronoi");
const User = require("./models/User");

//associations could go here!
ArtPieces.belongsToMany(Voronoi, { through: "VoronoiElements" });
//Voronoi.belongsTo(ArtPieces, {through: VoronoiElements});
Voronoi.belongsToMany(ArtPieces, { through: "VoronoiElements" });

module.exports = {
	db,
	models: {
		ArtPieces,
		Voronoi,
	},
};
