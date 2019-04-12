
import React from 'react'

import Button from '@material-ui/core/Button'

const styles ={
    root: {
        widht: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        
    },
    button: {}
}

class Auth extends React.Component {
  state = {
    isUserLoggedIn: false,
  }

  render() {
    return (
      <div>
        {
          this.state.isUserLoggedIn ?
            this.props.children
            :
            <div
                style={styles.root}
            >
              <h1>JFDDL7 CHAT</h1>
              <Button
                variant={'contained'}
                color={'secondary'}
              >
                LOGIN BY GOOGLE
              </Button>

            </div>
        }
      </div>
    )
  }
}
export default Auth