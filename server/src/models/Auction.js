module.exports = (sequelize, DataTypes) => {
    const Auction = sequelize.define('Auction', {
        name: DataTypes.STRING,
        photograph: DataTypes.STRING,
        photographer: DataTypes.STRING,
        description: DataTypes.TEXT,
        endDate: DataTypes.STRING,
        size: DataTypes.STRING,
        weight: DataTypes.DECIMAL,
        condition: DataTypes.STRING,
        price: DataTypes.DECIMAL
    })
    return Auction
}
