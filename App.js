import { ChatEngine } from 'react-chat-engine';

import LoginForm from './Components/LoginForm';
import ChatFeed from './Components/ChatFeed';

import './App.css';

const App =  () =>{  
            if(!localStorage.getItem('username')) return<LoginForm />
                        return(
                                                <ChatEngine
                                                    height="100vh"
                                                    projectID="eab09307-a288-4d10-9fda-7ebb3747c6cb"
                                                    userName={localStorage.getItem('username')}
                                                    userSecret={localStorage.getItem('password')}
                                                    renderChatFeed={(chatAppProps) => (
                                                        <ChatFeed {...chatAppProps} />
                                                  )}
                                                      
                                            
                                                />
                        );
}

export default App;