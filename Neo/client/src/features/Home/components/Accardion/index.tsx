import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Plus, Minus } from 'lucide-react';
import Box from '@mui/material/Box';

// Custom AccordionSummary with icon on left
const CustomAccordionSummary = (props: {
    expandIcon: React.ReactNode,
    children: React.ReactNode,
    [key: string]: any
}) => {
    const { expandIcon, children, ...other } = props;
    return (
        <AccordionSummary
            {...other}
            sx={{
                flexDirection: 'row',  // icon solda, mətn sağda
                '& .MuiAccordionSummary-expandIconWrapper': {
                    order: 0, // icon ilk sırada
                    marginRight: 1,
                    marginLeft: 0,
                },
                '& .MuiAccordionSummary-content': {
                    order: 1,
                },
            }}
            expandIcon={expandIcon}
        >
            {children}
        </AccordionSummary>
    );
};

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                sx={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }}
                className='py-4'>
                <CustomAccordionSummary
                    expandIcon={expanded === 'panel1' ? <Minus size={16} /> : <Plus size={16} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span">
                        <span className="text-[15px] font-semibold uppercase tracking-[0.1rem]">
                            Explore new collection of glasses in our <br /> online shop
                        </span>
                    </Typography>
                </CustomAccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className='text-[16px] text-[#868686] pl-7.5'>
                            Nullam vitae eros nisi. Vestibulum non purus vitae massa mollis sagittis vesti bulum.
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                sx={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none', borderBottom: '1px solid #e0e0e0' }}
                className='py-4'>
                <CustomAccordionSummary
                    expandIcon={expanded === 'panel2' ? <Minus size={16} /> : <Plus size={16} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography component="span">
                        <span className="text-[15px] font-semibold uppercase tracking-[0.1rem]">
                            Unique items with ergonomic design style
                        </span>
                    </Typography>
                </CustomAccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className='text-[16px] text-[#868686] pl-7.5'>
                            Nullam vitae eros nisi. Vestibulum non purus vitae massa mollis sagittis vesti bulum.
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
