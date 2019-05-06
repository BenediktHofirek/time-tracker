const getTimeWithoutMiliseconds = time => time - Math.round(((time / 1000) % 1) * 1000);

export default getTimeWithoutMiliseconds