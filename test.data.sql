INSERT INTO sound (quote, path, plays) VALUES
    ('You know whats cooking?', 'C:\Users\Admiral Joshua\Downloads\Misc_soundboard_whats_cooking.mp3', 0),
    ('Ding! Ding! Ding!', 'C:\Users\Admiral Joshua\Downloads\Misc_soundboard_ding_ding_ding.mp3', 0);
    -- ('General Sound 3', '/Music/2.mp3', 0);

INSERT INTO collection (name, owner) VALUES ('DotA 2', 0);

-- ("collectionId", "soundId")
INSERT INTO collection_sounds_sound VALUES (1, 5), (1, 6); --, (1, 4);


INSERT INTO tag (tag) VALUES ('The International 2017');

INSERT INTO tag_sounds_sound ("tagId", "soundId") VALUES (1, 5), (1, 6);


