import {DataTypes, Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/db')
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export const Vinyl = sequelize.define('Vinyl', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    release_date: {
        type: DataTypes.STRING,
        allowNull: true
    },
    purchase_date: {
        type: DataTypes.STRING,
        allowNull: true
    },
    release_price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    current_price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    purchase_price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: true
    },
    label: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export const Track = sequelize.define('Track', {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    vinyl_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Vinyl.sync();
Track.sync();