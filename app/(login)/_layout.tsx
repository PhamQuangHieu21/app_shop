import { Stack } from "expo-router/build/layouts/Stack";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" options={{ headerShown: false, statusBarHidden: true }}
            />
        </Stack>
    );
}
