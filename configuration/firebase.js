var admin = require("firebase-admin");

const serviceAccount = {
    "type": "service_account",
    "project_id": "gestman-dev",
    "private_key_id": "7010b8a565b528d65fcad4af88c4156b98c81dd1",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3TythXzToeQ82\nEypeqFPQj6f0l55C+hgmu/xZP5F2F86b6h90+oDADspX1Qpviu8pJ4EVN+rwB0wP\nT5rnBvqi4o5txIodvJ1qQ6AnTHTrCwFLBT1hivV4YsT71g69JJxoSE3RzOaff8oM\nNS3KloR0tmvQYowmzyzGm6m5/5eA8d9m3cUV2xu3VER75J5NJdcSAPOE/HSRRxFr\nxvbnmzq+jfRLHQkUwTti1FgtHB2FhV1s47UXmyLqBeeaGrO2vPCNP0HfQt93TZws\njO+f+/GG37/MX/tA8QF1Lm2SAs2EMI5Lcr0WAbTGExZjKFmXxxdw0W8AY8ej8NNs\nLIT2IQcRAgMBAAECggEAKhKB7KKXKF82skzSTfD48bazEBSnhoxTtDozuEE6j931\ndfwVlbn0CICsiN20/DZpX2r5eccAhXBLUP1OmoVTy8RPd9qi76HNiGj2jmaCNDst\npAwTEzr7TZLvzrRJ5DgNrPKhZ8yNRyDjnQsslCGZS5dd5fFkZPjqeDgci7vhyD53\n/EXa1OIODimA/z/3pxlWPfZycHyRkRpoktHEGcLffIXWiGPQFTkFzoF5XTX1Go80\n8eU5BcJFHp0pD6561NZ+XeiLx0tymL0YbvWETwD9zANYRepiBkGToofi/lHFOqxo\ncAZBDTv3XaLVGYM8yOMDYGtLaS1Vr0Zu3OpVdxK0JQKBgQDaVOaixl7RwFwKnwNt\n/eANslD7Lc17mGLvXZE53HtzuliF70cwgs+1nOwzZCjZKdRRPrdX4SsoWVnQ9Ql+\n8kLSDTcB9gEoD3pd7hjG0QqpVSOzRCQYFVfPBDJJZ5Ci8HXPxlKbdE5QNc9howHo\n0jNqkHtKV7daUyJMcHH8yEQAzQKBgQDW721rrTeKX/PAYh2lrHDPUjjOkEZK1hzV\nhSXSkFsbUazOyCyei+QroCloCa6Td8OOVWzqWp6l0uKh37PGM1KKokbK2dRBIYya\nA+zcJhshsCODTRfuTpwSJk/5QbPdPgoLMoX6UThvanT9a95+sQMxqpC8KkaLGPkS\nuzjfWoPPVQKBgAnDsEjpXEY/Nx6We/3IU+Po7Kw/ISh86TfRVHRlAvRrChh7WhC2\nWPnDWeD2gskrkL5Ncr+wZ1C3pketHc6aoRhp1OL2kJitEIjw5BTINpTaJO2Yh5C4\nK6QriOA1jIds/6faM8mWCwaVUYAJXUV/WSNT8N+jSqT0gN0wTjjC8B+lAoGAaNRF\n7eqB2D+MRxyTkSZVrwhPJJBBeGaNkaZrGBPIG77uJbyD5qAcHRr0lwWB2/Lhsh4A\nDR09m2sLlh/hMp39eBhFptIvL8UJKmUXtRfwy7F44KVNMrGsdT2ya8Ob0iBcDbIK\nnlfWyqCFhsSBtBDpmeOyy9NirJz1filKR8WB3DECgYEAy0KVFOhoJ0n2Quv6HtG7\n+V//QeU+3vFBLSJzokwpCOx2/dUvKqnX6+xYG8/d99xSvmasWL1TXnK6GfMW3w+9\n8xHDrEBIL9g2VLAWCfhMjwdStOAVS8pJ1WEpS1rW+B56a+947IBMiuTu5PgQzhUA\nfO5rh0/CgaGBp5z6LV1JpMg=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-yuqvg@gestman-dev.iam.gserviceaccount.com",
    "client_id": "114012012861668275039",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yuqvg%40gestman-dev.iam.gserviceaccount.com"
  }
  
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gestman-dev.firebaseio.com"
});