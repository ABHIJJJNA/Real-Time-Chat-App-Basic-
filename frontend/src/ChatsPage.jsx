import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage=(props)=>{
    const chatsProps= useMultiChatLogic('0fbaae8d-3afb-4b5c-93f4-284c883599b7',
        props.user.username, props.user.secret);
    return(
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatsProps}/>
        <MultiChatWindow {...chatsProps} style={{height:'100%'}} />

    </div>
    ) 
}

export default ChatsPage