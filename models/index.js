const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

Traveller.hasMany(Trip, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Trip.belongsTo(Traveller, {
  foreignKey: 'travellar_id',
  onDelete: 'CASCADE',
});

// Define a Location as having many Tripss, thus creating a foreign key in the `Trips` table
Location.hasMany(Trip, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Trips side
Trip.belongsTo(Location, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

Traveller.belongsToMany(Location, { through: 'Trip' });
Location.belongsToMany(Traveller, { through: 'Trip' });

module.exports = { Location, Traveller, Trip };