import PocketBase from 'pocketbase'

const appConfig = useAppConfig()
const pb = new PocketBase(appConfig.pocketbase.url)

export const usePocketbase = () => {
    return pb
}
