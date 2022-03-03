import React, { useContext } from 'react';
import { useTheme } from 'styled-components';

import Container from './styles';

import { ToggleThemeContext } from '../../contexts/ToggleThemeContext';

export default function Footer() {
    const { theme, handleToggleTheme } = useContext(ToggleThemeContext);
    
    const themeNumbers = useTheme();
    
    const stylesCommon = {
        margin: themeNumbers.spacing.small,
        padding: themeNumbers.spacing.large,
        borderRadius: themeNumbers.borderRadius,
    }

    return (
        <Container style={stylesCommon}>
            <span>JStack's Blog. Todos os direitos reservados.</span>
            <button
                type="button"
                onClick={handleToggleTheme}
            >
                {theme === 'dark' ? '🌞' : '🌚'}
            </button>
        </Container>
    );
}