import React from 'react';
import { ThemeContext } from './theme-context';
class ThemedButton extends React.Component
{

    render()
    {

        let theme = this.context;
        return (
            <button>

                style={{ backgroundColor: theme.backgroundColor }}
            </button>
        );
    }
}
ThemedButton.contextType = ThemeContext;
export default ThemedButton;