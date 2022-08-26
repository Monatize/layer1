declare global {
    interface Window {
        ethereum: any
    }
    namespace NodeJS {
        interface ProcessENV {
            NEXT_PUBLIC_STORE_ID: string
        }
    }
}

export {}
