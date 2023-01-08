import PocketBase from 'pocketbase'

const appConfig = useAppConfig()
const pb = new PocketBase(appConfig.pocketbaseUrl);

export const usePocketbase = () => {
    return pb
}
