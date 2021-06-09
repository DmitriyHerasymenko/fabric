# New user registration DigiBank:

endpoint:

POST: /api/registeruser

request:

    {
        "name": "username@email.com",
        "company": "org1"
    }

if you register on behalf of Magnetocorp, the company field changes to "company":"org2"

response:

    {
        "certificate": "-----BEGIN CERTIFICATE-----\nMIIChDCCAiqgAwIBAgIUCZMc4GZixU8pR
            +Zi9TJJOznTO7kwCgYIKoZIzj0EAwIw\naDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\nEwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\nY2Etc2VydmVyMB4XDTIxMDQxMjEzMDUwMFoXDTIyMDQxMjEzMTAwMFowSDEwMA0G\nA1UECxMGY2xpZW50MAsGA1UECxMEb3JnMjASBgNVBAsTC2RlcGFydG1lbnQxMRQw\nEgYDVQQDDAtzYW1AdXNhLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABA8t\n+qEAwl5r6JoKePH+Nptro9mAMHcTGpfYUN1p/WIgvb84yyYgE8g5ru+zJYkFe95X\nk06wdEI1JznK8fD8LK2jgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\nMAAwHQYDVR0OBBYEFAqJbOsHtyI05lvgD2/FcUfgBf6EMB8GA1UdIwQYMBaAFMK0\nKN2qTswAY+B9TUYvLXR/Xdl8MG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\nZmlsaWF0aW9uIjoib3JnMi5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\nInNhbUB1c2EuY29tIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNI\nADBFAiEAyZeL9X3UO1ctYkE4hZqWBbhIgcLVR0aVMTy4j3DD+rACIB2zuRodsUqI\nXtbUrsG8Io1oHfAPCmwz93ZbYSilGuSy\n-----END CERTIFICATE-----\n",

        "privateKey": "-----BEGIN PRIVATE
            KEY-----\r\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg1Tz5d4JGmiKI5wnI\r\nrXSu2VwrQ13XdV7NMP0/vIvzvKmhRANCAAQPLfqhAMJea+iaCnjx/jaba6PZgDB3\r\nExqX2FDdaf1iIL2/OMsmIBPIOa7vsyWJBXveV5NOsHRCNSc5yvHw/Cyt\r\n-----END PRIVATE KEY-----\r\n",

        "company": "org2"

    }

# Login registered user:

endpoint:

GET: /api/login

    {
        "certificate": "-----BEGIN CERTIFICATE-----\nMIIChDCCAiqgAwIBAgIUCZMc4GZixU8pR+Zi9TJJOznTO7kwCgYIKoZIzj0EAwIw\naDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\nEwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\nY2Etc2VydmVyMB4XDTIxMDQxMjEzMDUwMFoXDTIyMDQxMjEzMTAwMFowSDEwMA0G\nA1UECxMGY2xpZW50MAsGA1UECxMEb3JnMjASBgNVBAsTC2RlcGFydG1lbnQxMRQw\nEgYDVQQDDAtzYW1AdXNhLmNvbTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABA8t\n+qEAwl5r6JoKePH+Nptro9mAMHcTGpfYUN1p/WIgvb84yyYgE8g5ru+zJYkFe95X\nk06wdEI1JznK8fD8LK2jgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\nMAAwHQYDVR0OBBYEFAqJbOsHtyI05lvgD2/FcUfgBf6EMB8GA1UdIwQYMBaAFMK0\nKN2qTswAY+B9TUYvLXR/Xdl8MG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\nZmlsaWF0aW9uIjoib3JnMi5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\nInNhbUB1c2EuY29tIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNI\nADBFAiEAyZeL9X3UO1ctYkE4hZqWBbhIgcLVR0aVMTy4j3DD+rACIB2zuRodsUqI\nXtbUrsG8Io1oHfAPCmwz93ZbYSilGuSy\n-----END CERTIFICATE-----\n",

        "privateKey": "-----BEGIN PRIVATE KEY-----\r\nMIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg1Tz5d4JGmiKI5wnI\r\nrXSu2VwrQ13XdV7NMP0/vIvzvKmhRANCAAQPLfqhAMJea+iaCnjx/jaba6PZgDB3\r\nExqX2FDdaf1iIL2/OMsmIBPIOa7vsyWJBXveV5NOsHRCNSc5yvHw/Cyt\r\n-----END PRIVATE KEY-----\r\n",
    }

# Issue of new commercial paper on behalf of "Magnetocorp" company.

endpoint:

POST: /api/issue

request:

    {
        certificate: '-----BEGIN CERTIFICATE-----\n' +
            'MIICgzCCAiqgAwIBAgIUeHlIPbiaB8gMTV1o1TffmwzQuR4wCgYIKoZIzj0EAwIw\n' +
            'aDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\n' +
            'EwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\n' +
            'Y2Etc2VydmVyMB4XDTIxMDQxMzA5MDMwMFoXDTIyMDQxMzA5MDgwMFowSDEwMA0G\n' +
            'A1UECxMGY2xpZW50MAsGA1UECxMEb3JnMjASBgNVBAsTC2RlcGFydG1lbnQxMRQw\n' +
            'EgYDVQQDDAtzYW1AdXNhLnVhczBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABGMB\n' +
            '7HfP7hvyxyCYQo7rZ3W/YhU0nXKvr3x3RbXUAKb6dlZPMKPMrOUP9ZBUuHf2J9u2\n' +
            '8T2XxZOThihPJrQOcUWjgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\n' +
            'MAAwHQYDVR0OBBYEFHZdUiG4QXbF50SOVLBmt8MayTHSMB8GA1UdIwQYMBaAFJAb\n' +
            '8PhtmVLYaJPh8QC1MGbh4LkFMG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\n' +
            'ZmlsaWF0aW9uIjoib3JnMi5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\n' +
            'InNhbUB1c2EudWFzIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNH\n' +
            'ADBEAiAHeqtFcrOGaXP0cr2kS9ymJRk2KeDdttFYS5869zxfggIgAIWcjOqXW4uk\n' +
            '0lQz5vGUlSrWYajbPEuAE5yozobU/Ls=\n' +
            '-----END CERTIFICATE-----',
        privateKey: '-----BEGIN PRIVATE KEY-----\n' +
            'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgBDkYuAK6xTgCdjti\n' +
            '3QinAR0LM6h+K9IEXg1xou+9dFShRANCAARjAex3z+4b8scgmEKO62d1v2IVNJ1y\n' +
            'r698d0W11ACm+nZWTzCjzKzlD/WQVLh39ifbtvE9l8WTk4YoTya0DnFF\n' +
            '-----END PRIVATE KEY-----',
        paperNumber: '00001',
        redeemDate: '09.04.2021',
        cost: '50000000'
    }

response:

    Key: "org.papernet.commercialpaper00001",
    Record:{
        class: 'org.papernet.commercialpaper',
        key: 'magnetocorp:00001',
        currentState: 1,
        issuer: 'magnetocorp',
        paperNumber: '00001',
        issueDateTime: '13.04.2021',
        maturityDateTime: '09.04.2021',
        faceValue: 50,
        mspid: 'Org2MSP',
        owner: 'magnetocorp'
    }

# Buy commercial paper.

endpoint:

PUT: /api/buy

response:

    {
        certificate: '-----BEGIN CERTIFICATE-----\n' +
            'MIIChDCCAiqgAwIBAgIUHWF1LIjeNhkntpukK2bGaw7gMwAwCgYIKoZIzj0EAwIw\n' +
            'aDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\n' +
            'EwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\n' +
            'Y2Etc2VydmVyMB4XDTIxMDQxMzEwMjUwMFoXDTIyMDQxMzEwMzAwMFowSDEwMA0G\n' +
            'A1UECxMGY2xpZW50MAsGA1UECxMEb3JnMTASBgNVBAsTC2RlcGFydG1lbnQxMRQw\n' +
            'EgYDVQQDDAtuaWtAa2luZy5yaTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABIq6\n' +
            'yvk1cx2A72R0gC3MBEIL0Ti9RoXtqink2Hnz4liGR/9rtPmfDtiocQfvviehVV3I\n' +
            'srPaaQLROx1c4zMyPYGjgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\n' +
            'MAAwHQYDVR0OBBYEFMusksym5khPthudEITB/hV+ZKuAMB8GA1UdIwQYMBaAFCFz\n' +
            'vHVKroWQFN5wQnRV2qoOP+baMG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\n' +
            'ZmlsaWF0aW9uIjoib3JnMS5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\n' +
            'Im5pa0BraW5nLnJpIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNI\n' +
            'ADBFAiEA598tPQlHcELj3GDlSrW06y11KOjZhhWrv0zdtRrw5YECIHt9kYaiDBUc\n' +
            'fRp4LU3wWs9gNtxMOaLQRgCxg365DEfi\n' +
            '-----END CERTIFICATE-----',

        privateKey: '-----BEGIN PRIVATE KEY-----\n' +
            'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg20s1YZLBySDJtx3Y\n' +
            'yIdzNdqPrMyolSD+/3JjXsESclWhRANCAASKusr5NXMdgO9kdIAtzARCC9E4vUaF\n' +
            '7aop5Nh58+JYhkf/a7T5nw7YqHEH774noVVdyLKz2mkC0TsdXOMzMj2B\n' +
            '-----END PRIVATE KEY-----',

        paperNumber: '00001',

        releaseDate: '11.04.2021',

        maturityDateTime: '09.04.2021',

        faceValue: '49',

        owner: 'magnetocorp',

        issuer: 'magnetocorp'

    }

request:

    {
        class: 'org.papernet.commercialpaper',
        key: 'magnetocorp:00001',
        currentState: 3,
        faceValue: 50,
        issueDateTime: '13.04.2021',
        issuer: 'magnetocorp',
        maturityDateTime: '13.04.2022',
        mspid: 'Org1MSP',
        owner: 'digibank',
        paperNumber: '00001'
    }

# Redeem commercial paper.

endpoint:

PUT: /api/redeem

    response:
    certificate: '-----BEGIN CERTIFICATE-----\n' +
        'MIIChDCCAiqgAwIBAgIUHWF1LIjeNhkntpukK2bGaw7gMwAwCgYIKoZIzj0EAwIw\n' +
        'aDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\n' +
        'EwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\n' +
        'Y2Etc2VydmVyMB4XDTIxMDQxMzEwMjUwMFoXDTIyMDQxMzEwMzAwMFowSDEwMA0G\n' +
        'A1UECxMGY2xpZW50MAsGA1UECxMEb3JnMTASBgNVBAsTC2RlcGFydG1lbnQxMRQw\n' +
        'EgYDVQQDDAtuaWtAa2luZy5yaTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABIq6\n' +
        'yvk1cx2A72R0gC3MBEIL0Ti9RoXtqink2Hnz4liGR/9rtPmfDtiocQfvviehVV3I\n' +
        'srPaaQLROx1c4zMyPYGjgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\n' +
        'MAAwHQYDVR0OBBYEFMusksym5khPthudEITB/hV+ZKuAMB8GA1UdIwQYMBaAFCFz\n' +
        'vHVKroWQFN5wQnRV2qoOP+baMG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\n' +
        'ZmlsaWF0aW9uIjoib3JnMS5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\n' +
        'Im5pa0BraW5nLnJpIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNI\n' +
        'ADBFAiEA598tPQlHcELj3GDlSrW06y11KOjZhhWrv0zdtRrw5YECIHt9kYaiDBUc\n' +
        'fRp4LU3wWs9gNtxMOaLQRgCxg365DEfi\n' +
        '-----END CERTIFICATE-----',
    privateKey: '-----BEGIN PRIVATE KEY-----\n' +
        'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg20s1YZLBySDJtx3Y\n' +
        'yIdzNdqPrMyolSD+/3JjXsESclWhRANCAASKusr5NXMdgO9kdIAtzARCC9E4vUaF\n' +
        '7aop5Nh58+JYhkf/a7T5nw7YqHEH774noVVdyLKz2mkC0TsdXOMzMj2B\n' +
        '-----END PRIVATE KEY-----',
    issuer: 'magnetocorp',
    paperNumber: '00001',
    issuingOwnerMSP: 'Org2MSP',
    maturityDateTime: '09.04.2021'
    }

request:

    {
        class: 'org.papernet.commercialpaper',
        key: 'magnetocorp:00001',
        currentState: 4,
        faceValue: 44444,
        issueDateTime: '13.04.2021',
        issuer: 'magnetocorp',
        maturityDateTime: '13.04.2022',
        mspid: 'Org2MSP',
        owner: 'magnetocorp',
        paperNumber: '00001',
        redeemDateTime: '09.04.2021'
    }

# Get all history.

endpoint:

GET: /api/history

request:

    }
        certificate: '-----BEGIN CERTIFICATE-----\n' +
            'MIIChDCCAiqgAwIBAgIUHWF1LIjeNhkntpukK2bGaw7gMwAwCgYIKoZIzj0EAwIw\n' +
            'aDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\n' +
            'EwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\n' +
            'Y2Etc2VydmVyMB4XDTIxMDQxMzEwMjUwMFoXDTIyMDQxMzEwMzAwMFowSDEwMA0G\n' +
            'A1UECxMGY2xpZW50MAsGA1UECxMEb3JnMTASBgNVBAsTC2RlcGFydG1lbnQxMRQw\n' +
            'EgYDVQQDDAtuaWtAa2luZy5yaTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABIq6\n' +
            'yvk1cx2A72R0gC3MBEIL0Ti9RoXtqink2Hnz4liGR/9rtPmfDtiocQfvviehVV3I\n' +
            'srPaaQLROx1c4zMyPYGjgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\n' +
            'MAAwHQYDVR0OBBYEFMusksym5khPthudEITB/hV+ZKuAMB8GA1UdIwQYMBaAFCFz\n' +
            'vHVKroWQFN5wQnRV2qoOP+baMG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\n' +
            'ZmlsaWF0aW9uIjoib3JnMS5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\n' +
            'Im5pa0BraW5nLnJpIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNI\n' +
            'ADBFAiEA598tPQlHcELj3GDlSrW06y11KOjZhhWrv0zdtRrw5YECIHt9kYaiDBUc\n' +
            'fRp4LU3wWs9gNtxMOaLQRgCxg365DEfi\n' +
            '-----END CERTIFICATE-----',

        privateKey: '-----BEGIN PRIVATE KEY-----\n' +
            'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg20s1YZLBySDJtx3Y\n' +
            'yIdzNdqPrMyolSD+/3JjXsESclWhRANCAASKusr5NXMdgO9kdIAtzARCC9E4vUaF\n' +
            '7aop5Nh58+JYhkf/a7T5nw7YqHEH774noVVdyLKz2mkC0TsdXOMzMj2B\n' +
            '-----END PRIVATE KEY-----',

        paperNumber: 'all',
    }

response:

    [
        {
            "Key":" org.papernet.paper magnetocorp 00001 ",
            "Record": {
                "class": "org.papernet.commercialpaper",
                "currentState": 4,
                "faceValue": 44444,
                "issueDateTime": "13.04.2021",
                "issuer": "magnetocorp",
                "maturityDateTime": "13.04.2022",
                "mspid": "Org2MSP",
                "owner": "magnetocorp",
                "paperNumber": "00001",
                "redeemDateTime": "09.04.2021"
            }
        },
        {
            "Key":" org.papernet.paper magnetocorp 00002 ",
            "Record": {
                "class": "org.papernet.commercialpaper",
                "currentState": 1,
                "faceValue": 50000000,
                "issueDateTime": "13.04.2021",
                "issuer": "magnetocorp",
                "maturityDateTime": "09.04.2021",
                "mspid": "Org2MSP",
                "owner": "magnetocorp",
                "paperNumber": "00002"
            }
        }
    ]


# Get history by paper number.

endpoint:

GET: /api/history

request:

    }
        certificate: '-----BEGIN CERTIFICATE-----\n' +
            'MIIChDCCAiqgAwIBAgIUHWF1LIjeNhkntpukK2bGaw7gMwAwCgYIKoZIzj0EAwIw\n' +
            'aDELMAkGA1UEBhMCVVMxFzAVBgNVBAgTDk5vcnRoIENhcm9saW5hMRQwEgYDVQQK\n' +
            'EwtIeXBlcmxlZGdlcjEPMA0GA1UECxMGRmFicmljMRkwFwYDVQQDExBmYWJyaWMt\n' +
            'Y2Etc2VydmVyMB4XDTIxMDQxMzEwMjUwMFoXDTIyMDQxMzEwMzAwMFowSDEwMA0G\n' +
            'A1UECxMGY2xpZW50MAsGA1UECxMEb3JnMTASBgNVBAsTC2RlcGFydG1lbnQxMRQw\n' +
            'EgYDVQQDDAtuaWtAa2luZy5yaTBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABIq6\n' +
            'yvk1cx2A72R0gC3MBEIL0Ti9RoXtqink2Hnz4liGR/9rtPmfDtiocQfvviehVV3I\n' +
            'srPaaQLROx1c4zMyPYGjgdEwgc4wDgYDVR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQC\n' +
            'MAAwHQYDVR0OBBYEFMusksym5khPthudEITB/hV+ZKuAMB8GA1UdIwQYMBaAFCFz\n' +
            'vHVKroWQFN5wQnRV2qoOP+baMG4GCCoDBAUGBwgBBGJ7ImF0dHJzIjp7ImhmLkFm\n' +
            'ZmlsaWF0aW9uIjoib3JnMS5kZXBhcnRtZW50MSIsImhmLkVucm9sbG1lbnRJRCI6\n' +
            'Im5pa0BraW5nLnJpIiwiaGYuVHlwZSI6ImNsaWVudCJ9fTAKBggqhkjOPQQDAgNI\n' +
            'ADBFAiEA598tPQlHcELj3GDlSrW06y11KOjZhhWrv0zdtRrw5YECIHt9kYaiDBUc\n' +
            'fRp4LU3wWs9gNtxMOaLQRgCxg365DEfi\n' +
            '-----END CERTIFICATE-----',

        privateKey: '-----BEGIN PRIVATE KEY-----\n' +
            'MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg20s1YZLBySDJtx3Y\n' +
            'yIdzNdqPrMyolSD+/3JjXsESclWhRANCAASKusr5NXMdgO9kdIAtzARCC9E4vUaF\n' +
            '7aop5Nh58+JYhkf/a7T5nw7YqHEH774noVVdyLKz2mkC0TsdXOMzMj2B\n' +
            '-----END PRIVATE KEY-----',

        paperNumber: '00001',
    }

response:

    [
        {
            "TxId": "c8225f5d3d3aae0f36144593086df430968aea97aede04d48fb95a72091d3180",
            "Timestamp": "2021-04-13T11:29:45.753Z",
            "Value": {
                "class": "org.papernet.commercialpaper",
                "currentState": "REDEEMED",
                "faceValue": 44444,
                "issueDateTime": "13.04.2021",
                "issuer": "magnetocorp",
                "maturityDateTime": "13.04.2022",
                "mspid": "Org2MSP",
                "owner": "magnetocorp",
                "paperNumber": "00001",
                "redeemDateTime": "09.04.2021"
            }
        },
        {
            "TxId": "518091b359ac28b0443da0f4312f518030288267182b4447735c48f8c83d38ec",
            "Timestamp": "2021-04-13T10:35:29.563Z",
            "Value": {
                "class": "org.papernet.commercialpaper",
                "currentState": "TRADING",
                "faceValue": 44444,
                "issueDateTime": "13.04.2021",
                "issuer": "magnetocorp",
                "maturityDateTime": "13.04.2022",
                "mspid": "Org1MSP",
                "owner": "digibank",
                "paperNumber": "00001"
            }
        },
        {
            "TxId": "5faebf7b3c3d8b22c8f8df24c49c786a1c6ca9127ca5e1dbc817d895996fe284",
            "Timestamp": "2021-04-13T09:39:00.559Z",
            "Value": {
                "class": "org.papernet.commercialpaper",
                "currentState": "ISSUED",
                "issuer": "magnetocorp",
                "paperNumber": "00001",
                "issueDateTime": "13.04.2021",
                "maturityDateTime": "13.04.2022",
                "faceValue": 44444,
                "mspid": "Org2MSP",
                "owner": "magnetocorp"
            }
        }
    ]