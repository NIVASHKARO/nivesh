import {
  Box,
  Button,
  GridItem,
  Heading,
  InputLeftAddon,
  InputGroup,
  Input,
  Image,
  Select,
  SimpleGrid,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { fetchUser, getSpecificFund, getSpecificUser } from "../api/apis";
import { memo, useEffect, useMemo, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import Footer from "../components/Footer";
import toIndianCurrency from "../helper";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";

function UserDashboard() {
  const toast = useToast();
  const navigate = useNavigate();
  const [funds, setFunds] = useState([]);
  const [fromDate, setFromDate] = useState("2021-01-01");
  const [toDate, setToDate] = useState("2021-01-01");
  const [fundId, setFundId] = useState("none");
  const [searchValue, setSearchValue] = useState("");

  const totalUserData = useMemo(() => {
    let totalInvested = 0;
    let totalMarketValue = 0;
    if (!funds || funds.length === 0)
      return {
        totalInvested,
        totalMarketValue,
      };
    funds?.forEach((fund) => {
      totalInvested += fund?.invested || 0;
      totalInvested += fund?.recurringTotal || 0;
      totalMarketValue += fund?.marketValue || 0;
    });
    return {
      totalInvested,
      totalMarketValue,
    };
  }, [funds]);

  const handleGetUserFundsData = async () => {
    try {
      const { data } = await fetchUser();
      if (data.error) return;
      if (data.status) {
        setFunds(data?.data?.funds);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // user?.funds?.map(async (fund) => {
    //   fund.name = await getFundName(fund.id)
    // })
    handleGetUserFundsData();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const debouncedSearchInputChange = useDebouncedCallback(
    // function
    handleSearchInputChange,
    // delay in ms
    500
  );

  return (
    <Stack spacing={5} p={5}>
      <SimpleGrid p={5} columns={[2, 2, 4]} spacing={5}>
        <GridItem>
          <Stack
            h={"24"}
            p={2}
            rounded="lg"
            justifyContent="center"
            alignItems={"center"}
            bgGradient="linear(to-l, blue.400, blue.700)"
            spacing={2}
            color="white"
          >
            <Text fontWeight="bold" fontSize="sm" color="whiteAlpha.700">
              Current Value
            </Text>
            <Heading textAlign={"center"} fontSize="3xl" noOfLines={1}>
              {toIndianCurrency(totalUserData?.totalMarketValue)}
            </Heading>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack
            h={"24"}
            p={2}
            rounded="lg"
            justifyContent="center"
            alignItems={"center"}
            bgGradient="linear(to-l, blue.400, blue.700)"
            spacing={2}
            color="white"
          >
            <Text fontWeight="bold" fontSize="sm" color="whiteAlpha.700">
              Total Invested
            </Text>
            <Heading textAlign={"center"} fontSize="3xl" noOfLines={1}>
              {toIndianCurrency(totalUserData?.totalInvested)}
            </Heading>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack
            h={"24"}
            p={2}
            rounded="lg"
            justifyContent="center"
            alignItems={"center"}
            bgGradient={
              toIndianCurrency(
                totalUserData?.totalMarketValue - totalUserData?.totalInvested
              ) > 0
                ? "linear(to-r, green.700, green.500)"
                : "linear(to-r, red.700, red.500)"
            }
            spacing={2}
            color="white"
          >
            <Text fontWeight="bold" fontSize="sm" color="whiteAlpha.700">
              Total P&L (₹)
            </Text>
            <Heading textAlign={"center"} fontSize="3xl" noOfLines={1}>
              {toIndianCurrency(
                totalUserData?.totalMarketValue - totalUserData?.totalInvested
              )}
            </Heading>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack
            h={"24"}
            p={2}
            rounded="lg"
            justifyContent="center"
            alignItems={"center"}
            bgGradient={
              (
                ((totalUserData?.totalMarketValue -
                  totalUserData?.totalInvested) /
                  totalUserData?.totalInvested) *
                100
              ).toFixed(2) > 0
                ? "linear(to-r, green.700, green.500)"
                : "linear(to-r, red.700, red.500)"
            }
            spacing={2}
            color="white"
          >
            <Text fontWeight="bold" fontSize="sm" color="whiteAlpha.700">
              Total P&L (%)
            </Text>
            <Heading textAlign={"center"} fontSize="3xl" noOfLines={1}>
              {(
                ((totalUserData?.totalMarketValue -
                  totalUserData?.totalInvested) /
                  totalUserData?.totalInvested) *
                100
              ).toFixed(2)}
            </Heading>
          </Stack>
        </GridItem>
      </SimpleGrid>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftAddon children="Search funds" />
          <Input
            type="text"
            placeholder="Search for funds"
            onChange={debouncedSearchInputChange}
          />
        </InputGroup>
      </Stack>
      <TableContainer rounded={"lg"} border="1px" borderColor="gray.400">
        <Table variant="striped" colorScheme={"blue"}>
          <Thead>
            <Tr>
              <Th>Fund Name</Th>
              <Th>Current Value</Th>
              <Th>Invested Value</Th>
              <Th>Total P&L(₹)</Th>
              <Th>Total P&L(%)</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {funds
              ?.filter((fund) => fund?.id?.name.includes(searchValue))
              ?.map((fund) => {
                const totalInvested =
                  fund?.invested || 0 + fund?.recurringTotal || 0;
                return (
                  <Tr key={fund?.id}>
                    <Td color="gray.600">
                      <Stack spacing={4} direction={"row"} alignItems={"center"}>
                        <Image
                          borderRadius="full"
                          boxSize="100px"
                          src={fund?.id?.image}
                          alt={fund?.id?.name}
                          fallbackSrc="https://via.placeholder.com/100"
                          size="md"
                        />
                        <Text>{fund?.id?.name}</Text>
                      </Stack>
                    </Td>
                    <Td
                      sx={{
                        color: "gray.600",
                      }}
                    >
                      {toIndianCurrency(fund?.marketValue)}
                    </Td>
                    {console.log(fund)}
                    <Td color="gray.600">{toIndianCurrency(totalInvested)}</Td>
                    <Td
                      color="gray.600"
                      sx={{
                        color:
                          fund?.marketValue > totalInvested
                            ? "green.500"
                            : "red.500",
                      }}
                    >
                      {toIndianCurrency(fund?.marketValue - totalInvested)}
                    </Td>
                    <Td
                      sx={{
                        color:
                          fund?.marketValue > fund?.invested
                            ? "green.500"
                            : "red.500",
                      }}
                    >
                      {(
                        ((fund?.marketValue || 0 - totalInvested || 0) /
                          totalInvested || 0) * 100
                      ).toFixed(2)}
                    </Td>
                    <Td>
                      <Stack direction="row" spacing={3}>
                        <Button
                          colorScheme="red"
                          alignSelf={"center"}
                          size="xs"
                          onClick={() =>
                            navigate("/withdrawals", {
                              state: { fund: fund?.id?._id },
                            })
                          }
                        >
                          Sell
                        </Button>
                        <Button
                          colorScheme="green"
                          alignSelf={"center"}
                          size="xs"
                          onClick={() => navigate("/buy/" + fund?.id?._id)}
                        >
                          Buy
                        </Button>
                      </Stack>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <Box pt={12}></Box>
    </Stack>
  );
}

export default memo(UserDashboard);
