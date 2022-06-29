import activeWindow from 'active-win';

const checkTerraria = async () => {
    const window = await activeWindow();

    return window.owner.name === 'Terraria.exe' ? true : false;
}

export { checkTerraria }