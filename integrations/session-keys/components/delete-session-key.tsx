import type { Dispatch, SetStateAction } from 'react'

import type { Address } from 'wagmi'

import { Button } from '@/components/ui/button'

import { useSessionKeys } from '../hooks/use-session-keys'

interface DeleteSessionKeyProps {
  selectedSessionKey?: Address | undefined
  setSelectedSessionKey?: Dispatch<SetStateAction<Address | undefined>>
}

export function DeleteSessionKey({ selectedSessionKey, setSelectedSessionKey }: DeleteSessionKeyProps) {
  const { deleteSessionKey } = useSessionKeys()

  const handleDeleteSessionKey = () => {
    if (selectedSessionKey) {
      setSelectedSessionKey?.(undefined)
      deleteSessionKey(selectedSessionKey)
    }
  }

  return (
    <Button disabled={!selectedSessionKey} className="btn btn-red" onClick={handleDeleteSessionKey}>
      Delete Session Key
    </Button>
  )
}
