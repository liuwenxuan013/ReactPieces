import React from 'react';
import { ThemeContext } from './theme-context';
function ThemeToggleButton()
{
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme}
                    style={{ backgroundColor: theme.backgroundColor }}
                >
                    Toggle Theme
                </button>
            )}

        </ThemeContext.Consumer>
    );
}
export default ThemeToggleButton;