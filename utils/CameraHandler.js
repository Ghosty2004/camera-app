export default (proxy, user, password, ipAddress) => proxy({
    url: `rtsp://${user}:${encodeURIComponent(password)}@${ipAddress}/user=admin_password=${encodeURIComponent(password)}_channel=1_stream=1.sdp`,
    verbose: false
});