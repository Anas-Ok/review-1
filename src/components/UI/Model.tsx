import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ReactNode, useState } from 'react'

interface IProps {

  isOpen: boolean;
  closeModel: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({isOpen, closeModel, title, children}: IProps) => {
  // const [isOpen, setIsOpen] = useState(true)

  // function open() {
  //   setIsOpen(true)
  // }

  // function close() {
  //   setIsOpen(false)
  // }


  return (
    <>
      <div className="flex items-center justify-center">
          
    
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModel}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle as="h3" className="text-base/7 font-medium text-black/80">
                 {title}
                </DialogTitle>

                <div className="mt-4 w-full">
                 {children}
                </div>
                
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  )
}

export default Modal