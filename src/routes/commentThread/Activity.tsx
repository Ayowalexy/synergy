import React from "react";
import Flex, { Text } from "../../styles/pages/Flex";


type objProps = {
    likes: number | any,
    reply: number | any,
    send: number | any,
    bookmark: number | any
}


type activityProps = {
    type?: string,
    stats: objProps,
    filled?: boolean
}

const Activity = ({ type, stats, filled }: activityProps) => {
    return (
        <Flex

        >
            <Flex
                w={45}
                otherProps={{
                    marginLeft: type !== 'top_comment' ? 15 : 0
                }}
            >
                <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 0.500001C2.9625 0.500001 0.5 2.9625 0.5 6C0.5 11.5 7 16.5 10.5 17.663C14 16.5 20.5 11.5 20.5 6C20.5 2.9625 18.0375 0.500001 15 0.500001C13.14 0.500001 11.495 1.4235 10.5 2.837C9.99284 2.1146 9.31908 1.52505 8.53577 1.11824C7.75245 0.711443 6.88265 0.499377 6 0.500001Z"
                        fill={
                            filled
                                ?
                                '#BD1809'
                                : "transparent"
                        }
                        stroke="#DFDFDF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <Text>{stats.likes}</Text>
            </Flex>
            <Flex
                w={45}
            >
                {
                    type == 'top_comment'
                        ?

                        (
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.81315 14.5C3.02303 14.5 2.26526 14.1861 1.70656 13.6274C1.14786 13.0687 0.833984 12.311 0.833984 11.5208V3.72917C0.833984 2.93904 1.14786 2.18128 1.70656 1.62258C2.26526 1.06388 3.02303 0.75 3.81315 0.75H16.1882C16.5794 0.75 16.9668 0.827058 17.3282 0.976776C17.6897 1.12649 18.0181 1.34594 18.2947 1.62258C18.5714 1.89922 18.7908 2.22764 18.9405 2.58909C19.0903 2.95054 19.1673 3.33794 19.1673 3.72917V11.5208C19.1673 11.9121 19.0903 12.2995 18.9405 12.6609C18.7908 13.0224 18.5714 13.3508 18.2947 13.6274C18.0181 13.9041 17.6897 14.1235 17.3282 14.2732C16.9668 14.4229 16.5794 14.5 16.1882 14.5H10.9283L6.33398 17.9375C6.16375 18.0649 5.96141 18.1424 5.74962 18.1614C5.53783 18.1804 5.32493 18.14 5.13476 18.0449C4.94459 17.9498 4.78464 17.8036 4.67282 17.6227C4.56099 17.4419 4.5017 17.2335 4.50157 17.0208V14.5H3.81407H3.81315ZM10.4718 13.125H16.1882C16.6136 13.125 17.0216 12.956 17.3225 12.6552C17.6233 12.3543 17.7923 11.9463 17.7923 11.5208V3.72917C17.7923 3.30372 17.6233 2.89569 17.3225 2.59485C17.0216 2.29401 16.6136 2.125 16.1882 2.125H3.81315C3.3877 2.125 2.97967 2.29401 2.67883 2.59485C2.37799 2.89569 2.20898 3.30372 2.20898 3.72917V11.5208C2.20898 12.4063 2.92765 13.125 3.81315 13.125H5.87473V16.5625L10.4718 13.125Z"
                                    fill="#EFEFEF" />
                            </svg>
                        )
                        :
                        (
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.81315 16.5C4.02303 16.5 3.26526 16.1861 2.70656 15.6274C2.14786 15.0687 1.83398 14.311 1.83398 13.5208V5.72917C1.83398 4.93904 2.14786 4.18128 2.70656 3.62258C3.26526 3.06388 4.02303 2.75 4.81315 2.75H17.1882C17.5794 2.75 17.9668 2.82706 18.3282 2.97678C18.6897 3.12649 19.0181 3.34594 19.2947 3.62258C19.5714 3.89922 19.7908 4.22764 19.9405 4.58909C20.0903 4.95054 20.1673 5.33794 20.1673 5.72917V13.5208C20.1673 13.9121 20.0903 14.2995 19.9405 14.6609C19.7908 15.0224 19.5714 15.3508 19.2947 15.6274C19.0181 15.9041 18.6897 16.1235 18.3282 16.2732C17.9668 16.4229 17.5794 16.5 17.1882 16.5H11.9283L7.33398 19.9375C7.16375 20.0649 6.96141 20.1424 6.74962 20.1614C6.53783 20.1804 6.32493 20.14 6.13476 20.0449C5.94459 19.9498 5.78464 19.8036 5.67282 19.6227C5.56099 19.4419 5.5017 19.2335 5.50157 19.0208V16.5H4.81407H4.81315ZM11.4718 15.125H17.1882C17.6136 15.125 18.0216 14.956 18.3225 14.6552C18.6233 14.3543 18.7923 13.9463 18.7923 13.5208V5.72917C18.7923 5.30372 18.6233 4.89569 18.3225 4.59485C18.0216 4.29401 17.6136 4.125 17.1882 4.125H4.81315C4.3877 4.125 3.97967 4.29401 3.67883 4.59485C3.37799 4.89569 3.20898 5.30372 3.20898 5.72917V13.5208C3.20898 14.4063 3.92765 15.125 4.81315 15.125H6.87473V18.5625L11.4718 15.125Z" fill="#EFEFEF" />
                                <path d="M5.42 11V8.2H6.512C6.75733 8.2 6.96667 8.23867 7.14 8.316C7.31333 8.39333 7.44667 8.50533 7.54 8.652C7.63333 8.79867 7.68 8.97333 7.68 9.176C7.68 9.37867 7.63333 9.55333 7.54 9.7C7.44667 9.844 7.31333 9.95467 7.14 10.032C6.96667 10.1093 6.75733 10.148 6.512 10.148H5.64L5.82 9.964V11H5.42ZM7.292 11L6.58 9.984H7.008L7.728 11H7.292ZM5.82 10.004L5.64 9.808H6.5C6.756 9.808 6.94933 9.75333 7.08 9.644C7.21333 9.532 7.28 9.376 7.28 9.176C7.28 8.976 7.21333 8.82133 7.08 8.712C6.94933 8.60267 6.756 8.548 6.5 8.548H5.64L5.82 8.348V10.004ZM9.21425 11.024C8.98758 11.024 8.78758 10.9773 8.61425 10.884C8.44358 10.7907 8.31025 10.6627 8.21425 10.5C8.12092 10.3373 8.07425 10.1507 8.07425 9.94C8.07425 9.72933 8.11958 9.54267 8.21025 9.38C8.30358 9.21733 8.43025 9.09067 8.59025 9C8.75292 8.90667 8.93558 8.86 9.13825 8.86C9.34358 8.86 9.52492 8.90533 9.68225 8.996C9.83958 9.08667 9.96225 9.21467 10.0503 9.38C10.1409 9.54267 10.1863 9.73333 10.1863 9.952C10.1863 9.968 10.1849 9.98667 10.1823 10.008C10.1823 10.0293 10.1809 10.0493 10.1783 10.068H8.37425V9.792H9.97825L9.82225 9.888C9.82492 9.752 9.79692 9.63067 9.73825 9.524C9.67958 9.41733 9.59825 9.33467 9.49425 9.276C9.39292 9.21467 9.27425 9.184 9.13825 9.184C9.00492 9.184 8.88625 9.21467 8.78225 9.276C8.67825 9.33467 8.59692 9.41867 8.53825 9.528C8.47958 9.63467 8.45025 9.75733 8.45025 9.896V9.96C8.45025 10.1013 8.48225 10.228 8.54625 10.34C8.61292 10.4493 8.70492 10.5347 8.82225 10.596C8.93958 10.6573 9.07425 10.688 9.22625 10.688C9.35158 10.688 9.46492 10.6667 9.56625 10.624C9.67025 10.5813 9.76092 10.5173 9.83825 10.432L10.0503 10.68C9.95425 10.792 9.83425 10.8773 9.69025 10.936C9.54892 10.9947 9.39025 11.024 9.21425 11.024ZM11.8435 11.024C11.6675 11.024 11.5061 10.984 11.3595 10.904C11.2155 10.8213 11.0995 10.7 11.0115 10.54C10.9261 10.38 10.8835 10.18 10.8835 9.94C10.8835 9.7 10.9248 9.5 11.0075 9.34C11.0928 9.18 11.2075 9.06 11.3515 8.98C11.4981 8.9 11.6621 8.86 11.8435 8.86C12.0515 8.86 12.2355 8.90533 12.3955 8.996C12.5555 9.08667 12.6821 9.21333 12.7755 9.376C12.8688 9.536 12.9155 9.724 12.9155 9.94C12.9155 10.156 12.8688 10.3453 12.7755 10.508C12.6821 10.6707 12.5555 10.7973 12.3955 10.888C12.2355 10.9787 12.0515 11.024 11.8435 11.024ZM10.7195 11.776V8.88H11.0875V9.452L11.0635 9.944L11.1035 10.436V11.776H10.7195ZM11.8115 10.688C11.9475 10.688 12.0688 10.6573 12.1755 10.596C12.2848 10.5347 12.3701 10.448 12.4315 10.336C12.4955 10.2213 12.5275 10.0893 12.5275 9.94C12.5275 9.788 12.4955 9.65733 12.4315 9.548C12.3701 9.436 12.2848 9.34933 12.1755 9.288C12.0688 9.22667 11.9475 9.196 11.8115 9.196C11.6781 9.196 11.5568 9.22667 11.4475 9.288C11.3408 9.34933 11.2555 9.436 11.1915 9.548C11.1301 9.65733 11.0995 9.788 11.0995 9.94C11.0995 10.0893 11.1301 10.2213 11.1915 10.336C11.2555 10.448 11.3408 10.5347 11.4475 10.596C11.5568 10.6573 11.6781 10.688 11.8115 10.688ZM13.446 11V8.032H13.83V11H13.446ZM14.6552 11.8C14.5539 11.8 14.4552 11.7827 14.3592 11.748C14.2632 11.716 14.1806 11.668 14.1112 11.604L14.2752 11.316C14.3286 11.3667 14.3872 11.4053 14.4512 11.432C14.5152 11.4587 14.5832 11.472 14.6552 11.472C14.7486 11.472 14.8259 11.448 14.8872 11.4C14.9486 11.352 15.0059 11.2667 15.0592 11.144L15.1912 10.852L15.2312 10.804L16.0632 8.88H16.4392L15.4112 11.212C15.3499 11.3613 15.2806 11.4787 15.2032 11.564C15.1286 11.6493 15.0459 11.7093 14.9552 11.744C14.8646 11.7813 14.7646 11.8 14.6552 11.8ZM15.1592 11.068L14.1912 8.88H14.5912L15.4152 10.768L15.1592 11.068Z" fill="white" />
                            </svg>
                        )
                }
                <Text>{stats.reply}</Text>
            </Flex>
            <Flex
                w={45}
            >
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5131 6.49341L7.26662 11.7959L1.29948 8.0637C0.444521 7.5288 0.622368 6.23015 1.58941 5.94735L15.757 1.79837C16.6425 1.53883 17.4632 2.36676 17.2001 3.25516L13.0087 17.4129C12.7215 18.3813 11.4303 18.5543 10.9004 17.6957L7.26384 11.7969" stroke="#EFEFEF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <Text>
                    {stats.send}
                </Text>
            </Flex>
            {
                type == 'top_comment' ? (
                    <>
                        <Flex w={45}>
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.999832 17.1794L0.996139 17.1818L0.995502 17.1822L0.582496 17.4515L0.995493 17.1822L0.996131 17.1818L0.999832 17.1794ZM0.999832 17.1794C0.99992 17.1801 0.999985 17.1809 1 17.1818M0.999832 17.1794L1 17.1818M1 17.1818V17.1822C1 17.1821 1 17.182 1 17.1818ZM1 17.1779V2.45455C1 2.03217 1.19168 1.61079 1.561 1.28848C1.93248 0.964278 2.44925 0.772728 3 0.772728H13C13.5508 0.772728 14.0675 0.964278 14.439 1.28848C14.8083 1.61079 15 2.03217 15 2.45455V17.1779C14.9998 17.1782 14.9996 17.1785 14.9994 17.1789L15 17.1793L14.9994 17.1789C14.9961 17.1839 14.9862 17.1958 14.964 17.2073C14.9417 17.2189 14.912 17.2271 14.8783 17.2276C14.8446 17.2282 14.814 17.2208 14.7905 17.2095L14.79 17.2093L8.21496 14.0784L8 13.976L7.78504 14.0784L1.21004 17.2093L1.20955 17.2095C1.18596 17.2208 1.15541 17.2282 1.12172 17.2276C1.08803 17.2271 1.0583 17.2189 1.036 17.2073C1.01384 17.1958 1.00385 17.1839 1.00062 17.1789L1 17.1793L1.00062 17.1789C1.00038 17.1785 1.00017 17.1782 1 17.1779Z"
                                    stroke="#EFEFEF" />
                            </svg>
                            <Text>{stats.bookmark}</Text>
                        </Flex>

                    </>
                ) : <div />
            }
        </Flex>
    )
}

export default Activity