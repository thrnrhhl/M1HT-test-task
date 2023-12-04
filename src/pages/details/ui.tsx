import { BackButton } from "@/src/features/back-button";
import { getUser } from "@/src/shared/api";
import { formatPhoneNumber, formattedDate, getAgeString } from "@/src/shared/config/helpers";
import { User } from "@/src/shared/config/models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContactBlock, ContactItem, BirthDate, DetailMain, UserAvatar, UserBlock, UserDepartament, UserDetails, UserName, UserScreen1, UserTag, WrapperBack, Age, Phone, Divider } from "./styled";

export const DetailPage = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<User | null>(null)

    const getData = async () => {
        try {
            setIsLoading(true);
            const response = await getUser({ id: params.id || '' });
            if (response) setData(response);
            setIsLoading(false)
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (isLoading) return <p>Загрузка</p>

    if (!data) return <p>Ошибка при получении данных</p>

    return (
        <DetailMain>
            <UserScreen1>
                <WrapperBack>
                    <BackButton />
                </WrapperBack>
                <UserBlock>
                    <UserAvatar src={data.avatarUrl} alt="avatar" width="104" height="104" />
                    <UserDetails>
                        <UserName>{data.firstName} {data.lastName}</UserName>
                        <UserTag>{data.userTag}</UserTag>
                    </UserDetails>
                    <UserDepartament>{data.department}</UserDepartament>
                </UserBlock>
            </UserScreen1>
            <ContactBlock>
                <ContactItem>
                    <img src="/favorite.svg" alt="favorite" width="24" height="24" />
                    <BirthDate>{formattedDate(data.birthday)}</BirthDate>
                    <Age>{getAgeString(data.birthday)}</Age>
                </ContactItem>
                <Divider />
                <ContactItem>
                    <img src="/phone.svg" alt="favorite" width="24" height="24" />
                    <Phone href={"tel:" + data.phone}>{formatPhoneNumber(data.phone)}</Phone>
                </ContactItem>
            </ContactBlock>
        </DetailMain>
    );
};