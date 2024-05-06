import { useMakeStyle } from '@dreamview/dreamview-theme';

export default function useStyle() {
    const hoc = useMakeStyle((theme) => ({
        'download-status': {
            display: 'flex',
            alignItems: 'center',
            '& .anticon': {
                marginRight: '6px',
            },
            '& svg': {
                fontSize: '16px',
            },
        },
        downloaded: {
            color: `${theme.tokens.colors.success2} !important`,
        },
        downloading: {
            color: theme.tokens.colors.brand3,
        },
        tobeupdate: {
            color: theme.tokens.colors.warn2,
        },
        downloadfail: {
            color: theme.tokens.colors.error2,
        },
    }));

    return hoc();
}
