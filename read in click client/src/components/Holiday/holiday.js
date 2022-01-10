import React from 'react';
import './holiday.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import SpecificHoliday from './specificHoliday'


const titleStyle = {
    // color: 'rgb(243, 78, 155)',
    fontSize: 'xx-large',
    // fontFamily: "Arial",
    fontWeight: 'bold'
}

const images = [
    {
        // url: '/static/images/image-list/camera.jpg',
        url: 'https://www.picshare.co.il/s_pictures/img46301.jpg',
        title: <div style={titleStyle}>ראש השנה</div>,
        width: '30%',
    },
    {
        url: 'https://www.היריד-היצירתי.co.il/wp-content/uploads/2020/06/sukka-craft-1-litle-300x300.jpg',
        title: <div style={titleStyle}>סוכות</div>,
        width: '30%',
    },
    {
        url: 'https://cdn.xxl.thumbs.canstockphoto.co.il/sea-%D7%A8%D7%A7%D7%A2-%D7%A2%D7%A0%D7%A0%D7%99%D7%9D-%D7%99%D7%95%D7%A8%D7%93-%D7%92%D7%A9%D7%9D-%D7%94%D7%91%D7%A7%D7%A2-%D7%97%D7%95%D7%A9%D7%9A-%D7%91%D7%A6%D7%99%D7%A8-%D7%98%D7%91%D7%A2-%D7%A6%D7%99%D7%95%D7%A8%D7%99%D7%9D_csp9540729.jpg',
        title: <div style={titleStyle}>ז' בחשון</div>,
        width: '30%',
    },
    {
        url: 'https://dalicanvas.co.il/wp-content/uploads/2020/01/%D7%91%D7%99%D7%AA-%D7%94%D7%9E%D7%A7%D7%93%D7%A9-%D7%9C%D7%90%D7%95%D7%A8-%D7%99%D7%95%D7%9D-1.jpeg',
        title: <div style={titleStyle}>ט' באב</div>,
        width: '30%',
    },


    {
        url: 'https://cdn.xxl.thumbs.canstockphoto.co.il/%D7%A8%D7%A7%D7%A2-%D7%99%D7%A8%D7%95%D7%A7-%D7%A1%D7%90%D7%A0%D7%91%D7%90%D7%A8%D7%A1%D7%98-%D7%95%D7%A7%D7%98%D7%95%D7%A8-%D7%A7%D7%9C%D7%99%D7%A4-%D7%90%D7%A8%D7%98_csp8088955.jpg',
        title: <div style={titleStyle}>מעגל השנה</div>,
        width: '30%',
    },

    {
        // url: '/static/images/image-list/camera.jpg',
        url: 'https://www.picjew.com/Thumbnail/03122014185355831175550546795piy0ci2fg5hy2kmzr10shad.jpg',
        title: <div style={titleStyle}>חנוכה</div>,
        width: '30%',
    },



    {
        url: 'https://www.היריד-היצירתי.co.il/wp-content/uploads/2020/06/tehilim-violin-65-x-45cm-1-300x300.jpg',
        title: <div style={titleStyle}>שבועות</div>,
        width: '30%',
    },
    {
        url: 'https://www.picjew.com/Thumbnail/29062016005230377334545938695crl1waix51rf1zp3njc2juk.jpg',
        title: <div style={titleStyle}>פסח</div>,
        width: '30%',
    },
    {
        // url: '/static/images/image-list/camera.jpg',
        url: 'https://www.picjew.com/Thumbnail/2101201113330073519145427200nj0f155hucma145jrjs5jew.jpg',
        title: <div style={titleStyle}>פורים</div>,
        width: '30%',
    },


];
//
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
        height: 200,
    },
    image: {
        flexWrap: 'wrap',
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function ButtonBases() {
    const classes = useStyles();
    const history = useHistory()
    function ezer() {
        history.push('./CheckboxLabels');
        console.log('nnnnnnnnnnn')
        return (
            <SpecificHoliday />
        )
    }

    return (<div className="gnrl">
        <div className={classes.root}>
            {images.map((image, index) => (
                <ButtonBase
                    onClick={ezer}
                    focusRipple
                    key={index}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                >
                    <button onClick={ezer}>
                        <span
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                    </button>
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            ))}
        </div></div>
    );

}


// export default Holiday