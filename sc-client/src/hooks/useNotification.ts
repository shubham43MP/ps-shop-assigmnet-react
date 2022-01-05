import { useSelector, useDispatch } from 'react-redux'
import {
  selectNotificationState
} from 'redux/selectors/global.selector'
import { setNotification } from 'redux/actions/action'
import { Severity } from 'types/common.types'

const useNotification = () => {
  const notification = useSelector(selectNotificationState)
  const dispatch = useDispatch()

  const handleNotificationClose = () => {
    dispatch(setNotification({
      notification: {
        open: false
      }
    }))
  }

  const handleNotificationOpen = ({ al, severity }:  { al: string } & Severity) => {
    dispatch(setNotification({
      notification: {
        open: true,
        alertLabel: al,
        severity
      }
    }))
  }

  return {
    notification,
    handleNotificationClose,
    handleNotificationOpen
  }
}

export default useNotification