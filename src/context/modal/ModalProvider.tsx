/* eslint-disable react-refresh/only-export-components */
import type { PostalProps } from "@/dummydata/postalData"
import React, { createContext, useEffect, useState } from "react"

interface ModalProviderProps {
    children: React.ReactNode
}

export type ModalData = {
    postal?: PostalProps
    // user?: User
    // agency?: Agency
    // ticket?: TicketDetails[0]
    // contact?: Contact
}

type ModalContextType = {
    data: ModalData | null
    isOpen: boolean
    setOpen: (modal: React.ReactNode) => void
    setClose: () => void
}

export const ModalContext = createContext<ModalContextType | null>(null)

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [data, setData] = useState<ModalData | null>(null)
    const [showingModal, setShowingModal] = useState<React.ReactNode>(null)
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true)
    }, [])

    const setOpen = (modal: React.ReactNode) => {
        if (!modal) return

        setShowingModal(modal)
        setIsOpen(true)
    }

    const setClose = () => {
        setIsOpen(false)
        setData(null)
        setShowingModal(null)
    }

    if (!isMounted) return null

    return (
        <ModalContext.Provider value={{ data, setOpen, setClose, isOpen }}>
            {children}
            {showingModal}
        </ModalContext.Provider>
    )
}

export default ModalProvider




// /* eslint-disable react-refresh/only-export-components */
// import type { PostalProps } from "@/dummydata/postalData"
// import { createContext,  useEffect, useState } from "react"

// interface ModalProviderProps {
//     children: React.ReactNode
// }

// export type ModalData = {
//     postal?: PostalProps
//     // user?: User;
//     // agency?: Agency;
//     // ticket?: TicketDetails[0];
//     // contact?: Contact;

// }

// type ModalContextType = {
//     data: ModalData
//     isOpen: boolean
//     setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => void
//     setClose: () => void
// }

// export const ModalContext = createContext<ModalContextType>({
//     data: {},
//     isOpen: false,
//     // setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => { },
//     setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => { },
//     setClose: () => { },
// });

// const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
//     const [isOpen, setIsOpen] = useState(false)
//     const [data, setData] = useState<ModalData>({} as ModalData)
//     const [showingModal, setShowingModal] = useState<React.ReactNode>(null)
//     const [isMounted, setIsMounted] = useState(false)

//     useEffect(() => {
//         // eslint-disable-next-line react-hooks/set-state-in-effect
//         setIsMounted(true)
//     }, [])

//     const setOpen = async (
//         modal: React.ReactNode,
//         // fetchData?: () => Promise<any>
//     ) => {
//         if (modal) {
//             // if (fetchData) {
//             //     setData({ ...data, ...(await fetchData()) });
//             // }
//             setShowingModal(modal)
//             setIsOpen(true)
//         }
//     }

//     const setClose = () => {
//         setIsOpen(false)
//         setData({})
//     }

//     if (!isMounted) return null

//     return (
//         <ModalContext.Provider value={{ data, setOpen, setClose, isOpen }}>
//             {children}
//             {showingModal}
//         </ModalContext.Provider>
//     )
// }



// export default ModalProvider