import React from "react";
// styled components
import { HeaderView, HeaderTitle, HeaderButton, colors } from "./../styles/appStyles";
// icons
import {Entypo} from "@expo/vector-icons";

const Header = () => {
    return(
        <HeaderView>
            <HeaderTitle>Todo App</HeaderTitle>
            <HeaderButton>
                <Entypo name="trash" size={25} color={colors.tertiary} />
            </HeaderButton>
        </HeaderView>
    );
}

export default Header;