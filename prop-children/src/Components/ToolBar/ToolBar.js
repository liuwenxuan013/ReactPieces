import React from 'react';
import ThemedButton from '../Components/Theme/ThemedButton';

function ToolBar(props)
{
    return (

        <ThemedButton onClick={props.changeTheme}>
            change theme
      </ThemedButton>

    );
}
export default ToolBar;
