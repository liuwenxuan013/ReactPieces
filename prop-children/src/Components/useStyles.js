
import { makeStyles } from "@material-ui/core/styles";

import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "56.25%"
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: grey[900]
    }
}));
export default useStyles;



