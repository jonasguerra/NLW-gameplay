import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { Guild, GuildProps } from '../Guild';
import { LinearGradient } from 'expo-linear-gradient';


export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props){

    const [category] = categories.filter(item => item.id === data.category);
    const { name, owner } = data.guild
    const { primary, on, secondary50, secondary70 } = theme.colors
    

    return(
        <RectButton {...rest}>
            <View style={styles.container}>
                <LinearGradient
                    style={styles.guildIconContainer}
                    colors={[secondary50, secondary70]}
                >
                    <GuildIcon guildId={data.guild.id} iconId={data.guild.icon}/>
                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            { name }
                        </Text>
                        <Text style={styles.category}>
                            {/*category.title ?
                            { category.title } :
                            { '' }*/}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}> 
                            <CalendarSvg />
                            <Text style={styles.date}>
                                { data.date }
                            </Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={ owner ? primary : on}/>
                            <Text style={[styles.player, { color: owner ? primary : on}]}>
                                { owner ? 'Anfitrião' : 'Visitante' }                        
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
     );
}